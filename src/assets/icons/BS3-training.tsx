import React from 'react';
import {View} from 'native-base';
import {Path, Rect, Svg} from 'react-native-svg';

export const BS3training = ({color = '#252525'}) => {
  return (
    <View>
      <Svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0.25" y="0.25" width="23.5" height="11.5" rx="0.75" fill="#80EDE6" stroke="black" stroke-width="0.5"/>
        <Path d="M2.6321 10V2.72727H5.54403C6.07907 2.72727 6.52533 2.80658 6.88281 2.9652C7.24029 3.12382 7.509 3.34399 7.68892 3.62571C7.86884 3.90507 7.95881 4.22704 7.95881 4.59162C7.95881 4.87571 7.90199 5.12547 7.78835 5.34091C7.67472 5.55398 7.51847 5.72917 7.3196 5.86648C7.12311 6.00142 6.8982 6.0973 6.64489 6.15412V6.22514C6.92188 6.23698 7.18111 6.3151 7.42259 6.45952C7.66643 6.60393 7.86411 6.80634 8.01562 7.06676C8.16714 7.32481 8.2429 7.63258 8.2429 7.99006C8.2429 8.37595 8.14702 8.72041 7.95526 9.02344C7.76586 9.3241 7.48532 9.56203 7.11364 9.73722C6.74195 9.91241 6.28385 10 5.73935 10H2.6321ZM4.16974 8.7429H5.4233C5.8518 8.7429 6.1643 8.66122 6.3608 8.49787C6.55729 8.33215 6.65554 8.11198 6.65554 7.83736C6.65554 7.63613 6.60701 7.45857 6.50994 7.30469C6.41288 7.1508 6.27438 7.03007 6.09446 6.94247C5.9169 6.85488 5.70502 6.81108 5.45881 6.81108H4.16974V8.7429ZM4.16974 5.7706H5.30966C5.52036 5.7706 5.70739 5.7339 5.87074 5.66051C6.03646 5.58475 6.16667 5.47822 6.26136 5.34091C6.35843 5.2036 6.40696 5.03906 6.40696 4.8473C6.40696 4.58452 6.31345 4.37263 6.12642 4.21165C5.94176 4.05066 5.67898 3.97017 5.33807 3.97017H4.16974V5.7706ZM12.9887 4.81889C12.9603 4.53243 12.8384 4.3099 12.623 4.15128C12.4075 3.99266 12.1152 3.91335 11.7458 3.91335C11.4949 3.91335 11.283 3.94886 11.1102 4.01989C10.9374 4.08854 10.8048 4.18442 10.7125 4.30753C10.6225 4.43063 10.5775 4.57031 10.5775 4.72656C10.5728 4.85677 10.6 4.97041 10.6592 5.06747C10.7208 5.16454 10.8048 5.24858 10.9113 5.3196C11.0179 5.38826 11.141 5.44863 11.2806 5.50071C11.4203 5.55043 11.5695 5.59304 11.7281 5.62855L12.3815 5.7848C12.6987 5.85582 12.9899 5.95052 13.2551 6.06889C13.5202 6.18726 13.7499 6.33286 13.944 6.50568C14.1381 6.6785 14.2885 6.8821 14.395 7.11648C14.5039 7.35085 14.5595 7.61955 14.5619 7.92259C14.5595 8.36766 14.4459 8.75355 14.221 9.08026C13.9984 9.40459 13.6765 9.65672 13.2551 9.83665C12.836 10.0142 12.3306 10.103 11.7387 10.103C11.1516 10.103 10.6403 10.013 10.2047 9.8331C9.77141 9.65317 9.43287 9.38684 9.18903 9.03409C8.94755 8.67898 8.82089 8.23982 8.80906 7.71662H10.297C10.3136 7.96046 10.3834 8.16406 10.5065 8.32741C10.632 8.4884 10.7989 8.61032 11.0072 8.69318C11.2179 8.77367 11.4558 8.81392 11.721 8.81392C11.9814 8.81392 12.2075 8.77604 12.3993 8.70028C12.5934 8.62453 12.7437 8.51918 12.8502 8.38423C12.9568 8.24929 13.0101 8.09422 13.0101 7.91903C13.0101 7.75568 12.9615 7.61837 12.8645 7.5071C12.7698 7.39583 12.6301 7.30114 12.4454 7.22301C12.2631 7.14489 12.0394 7.07386 11.7743 7.00994L10.9824 6.81108C10.3692 6.66193 9.88505 6.42874 9.52994 6.11151C9.17482 5.79427 8.99845 5.36695 9.00082 4.82955C8.99845 4.3892 9.11564 4.0045 9.35238 3.67543C9.59149 3.34635 9.91938 3.08949 10.336 2.90483C10.7527 2.72017 11.2262 2.62784 11.7565 2.62784C12.2963 2.62784 12.7674 2.72017 13.1699 2.90483C13.5747 3.08949 13.8895 3.34635 14.1145 3.67543C14.3394 4.0045 14.4554 4.38565 14.4625 4.81889H12.9887ZM18.0418 10.0994C17.5115 10.0994 17.0392 10.0083 16.6249 9.82599C16.2129 9.64134 15.8874 9.38802 15.6483 9.06605C15.4116 8.74171 15.2896 8.36766 15.2825 7.94389H16.8308C16.8403 8.12145 16.8983 8.2777 17.0048 8.41264C17.1137 8.54522 17.2581 8.6482 17.4381 8.72159C17.618 8.79498 17.8204 8.83168 18.0453 8.83168C18.2797 8.83168 18.4868 8.79025 18.6668 8.70739C18.8467 8.62453 18.9875 8.50971 19.0893 8.36293C19.1911 8.21615 19.242 8.04687 19.242 7.85511C19.242 7.66098 19.1876 7.48935 19.0787 7.3402C18.9722 7.18868 18.8183 7.07031 18.617 6.98509C18.4182 6.89986 18.1814 6.85724 17.9068 6.85724H17.2286V5.72798H17.9068C18.1388 5.72798 18.3436 5.68774 18.5212 5.60724C18.7011 5.52675 18.8408 5.41548 18.9402 5.27344C19.0396 5.12902 19.0893 4.96094 19.0893 4.76918C19.0893 4.58688 19.0455 4.42708 18.958 4.28977C18.8727 4.15009 18.752 4.04119 18.5957 3.96307C18.4419 3.88494 18.2619 3.84588 18.056 3.84588C17.8476 3.84588 17.6571 3.88376 17.4842 3.95952C17.3114 4.03291 17.1729 4.13826 17.0688 4.27557C16.9646 4.41288 16.9089 4.57386 16.9018 4.75852H15.4281C15.4352 4.33949 15.5548 3.97017 15.7868 3.65057C16.0188 3.33097 16.3313 3.0812 16.7243 2.90128C17.1197 2.71899 17.5659 2.62784 18.0631 2.62784C18.565 2.62784 19.0041 2.71899 19.3805 2.90128C19.757 3.08357 20.0493 3.32978 20.2577 3.63991C20.4684 3.94768 20.5725 4.29332 20.5702 4.67685C20.5725 5.08404 20.4459 5.42377 20.1902 5.69602C19.9369 5.96828 19.6066 6.1411 19.1994 6.21449V6.27131C19.7345 6.33996 20.1417 6.5258 20.421 6.82884C20.7027 7.1295 20.8424 7.50592 20.8401 7.9581C20.8424 8.3724 20.7229 8.74053 20.4814 9.0625C20.2423 9.38447 19.912 9.63778 19.4906 9.82244C19.0692 10.0071 18.5863 10.0994 18.0418 10.0994Z" fill="#02041B"/>
      </Svg>
    </View>
  );
};
