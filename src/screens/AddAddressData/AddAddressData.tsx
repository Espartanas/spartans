import { Header } from "../../components/molecule/Header.molecule";
import Screen from "../../components/molecule/Screen.molecule";

import React, { useState } from 'react';
import { VStack, Input, FormControl, WarningOutlineIcon, useToast, Text } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from "../../components/molecule/Button.molecule";
import { useApp } from "../../context/appContext";
import { maskZipCode } from "../../utils/masks";
import { useAuth } from "../../context/authContext";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

import axios from 'axios';

const validationSchema = yup.object().shape({
  postalCode: yup.string()
    .required('CEP é obrigatório')
    .matches(/^\d{5}-\d{3}$/, 'CEP deve estar no formato 00000-000'),
  address: yup.string().required('Endereço é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  addressNumber: yup.string()
    .required('Número é obrigatório')
    .min(1, 'Número tem que ter pelo menos 1 caracter'),
  phone: yup.string()
    .required('Celular é obrigatório')
    .matches(/^\d{11}$/, 'Celular deve ter 11 dígitos'),
});

type Props = {
  route: any,
}

export default function AddAddressData({route}: Props) {
  const { user } = useAuth();
  const { creditCardData } = useApp();

  const toast = useToast();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const fetchAddressByCEP = async (cep: string, setFieldValue: Function) => {
    try {
      const cleanCEP = cep.replace('-', '').trim();
      if (cleanCEP.length !== 8) {
        return;
      }

      const response = await axios.get(`https://viacep.com.br/ws/${cleanCEP}/json/`);

      if (response.data.erro) {
        toast.show({
          description: 'CEP não encontrado.',
          placement: 'top',
          bgColor: 'red.700',
        });
        return;
      }

      setFieldValue('address', response.data.logradouro || '');
      setFieldValue('neighborhood', response.data.bairro || '');
      setFieldValue('city', response.data.localidade || '');
      setFieldValue('state', response.data.uf || '');
    } catch (error) {
      toast.show({
        description: 'Erro ao buscar CEP.',
        placement: 'top',
        bgColor: 'red.700',
      });
      console.error(error);
    }
  };

  return (
    <Screen paddingX={'20px'}>
      <Header title={'Endereço e Telefone'} />

      <Formik
        initialValues={{
          postalCode: '',
          address: '',
          state: '',
          city: '',
          neighborhood: '',
          addressNumber: '',
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setLoading(true);
          const obj = {
            ...values,
            ...creditCardData,
            email: user.email,
            value: route.params.big_price_number,
            points: route.params.premium_points
          }

          api
            .post("/payment_credit", obj)
            .then((res) => {
              toast.show({
                description: res.data.message,
                placement: 'top',
                bgColor: 'green.700',
              })

              navigation.navigate("Congratulations" as never)
              console.log(res.data)
            })
            .catch((err) => {
              toast.show({
                description: err.response?.data?.erro?.[0] || err.response?.data?.message || 'Erro ao processar pagamento.',
                placement: 'top',
                bgColor: 'red.700',
              })
            })
            .finally(() => {
              setLoading(false);
            })
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <VStack space={4} w="100%" mt={12}>
            
            <Text color={'white'} fontWeight={'bold'} fontSize={'16px'}>Telefone</Text>

            <FormControl isInvalid={touched.phone && !!errors.phone}>
              <Input
                bg={'white'}
                _focus={{ bg: 'white' }}
                placeholder="Número telefone com DDD"
                keyboardType="numeric"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.phone}
              </FormControl.ErrorMessage>
            </FormControl>

            <Text color={'white'} fontWeight={'bold'} fontSize={'16px'}>Endereço</Text>
            
            <FormControl isInvalid={touched.postalCode && !!errors.postalCode}>
              <Input
                bg={'white'}
                _focus={{ bg: 'white' }}
                placeholder="CEP - 00000-000"
                onChangeText={(value) => {
                  handleChange('postalCode')(maskZipCode(value));
                }}
                onBlur={(e) => {
                  handleBlur('postalCode')(e);
                  fetchAddressByCEP(values.postalCode, setFieldValue);
                }}
                keyboardType="numeric"
                value={values.postalCode}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.postalCode}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={touched.address && !!errors.address}>
              <Input
                bg={'white'}
                _focus={{ bg: 'white' }}
                placeholder="Endereço"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.address}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={touched.addressNumber && !!errors.addressNumber}>
              <Input
                bg={'white'}
                _focus={{ bg: 'white' }}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={handleChange('addressNumber')}
                onBlur={handleBlur('addressNumber')}
                value={values.addressNumber}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.addressNumber}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={touched.neighborhood && !!errors.neighborhood}>
              <Input
                bg={'white'}
                _focus={{ bg: 'white' }}
                placeholder="Bairro"
                onChangeText={handleChange('neighborhood')}
                onBlur={handleBlur('neighborhood')}
                value={values.neighborhood}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.neighborhood}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={touched.city && !!errors.city}>
              <Input
                bg={'white'}
                _focus={{ bg: 'white' }}
                placeholder="Cidade"
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.city}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={touched.state && !!errors.state}>
              <Input
                bg={'white'}
                _focus={{ bg: 'white' }}
                placeholder="Estado"
                onChangeText={handleChange('state')}
                onBlur={handleBlur('state')}
                value={values.state}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.state}
              </FormControl.ErrorMessage>
            </FormControl>

            <Button
              text={loading ? <ActivityIndicator size="small" color="#ffffff" /> as any : "Avançar"}
              onPress={handleSubmit as any}
              isDisabled={loading}
            />
          </VStack>
        )}
      </Formik>
    </Screen>
  );
}
