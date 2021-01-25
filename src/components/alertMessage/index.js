// @vendors
import React from 'react';
import { View, Text, Image } from 'react-native';

// @styles
import styles from './styles';

// @assets
const errorIcon = require('../../assets/warning.png');

const AlertMessage = ({ message, show, type, style }) => {
  const renderIcon = () => {
    switch (type) {
      case 'info': {
        return <Image height={20} width={20} resizeMode="cover" source={errorIcon} />;
      }
      case 'error': {
        return <Image resizeMode="center" style={styles.imageStyle} source={errorIcon} />;
      }
      default: {
      }
    }
  };

  return (
    <>
      {show ? (
        <View style={[styles.container]}>
          {renderIcon()}
          <Text style={[styles.textWarning, style]}>{message}</Text>
        </View>
      ) : null}
    </>
  );
};

export default AlertMessage;
