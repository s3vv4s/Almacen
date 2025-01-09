import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ArgumentsMovimientos } from './ModelBusqueda';
const data = [
  { label: 'Aplicado y Pendiente', value: '' },
  { label: 'Aplicado', value: 'APLICADO' },
  { label: 'Pendiente', value: 'NUEVO' },

];
type Props = {
  setArgBusqueda: React.Dispatch<React.SetStateAction<ArgumentsMovimientos>>;
  argBusqueda: ArgumentsMovimientos;
};
const DropdownComponent = ({ setArgBusqueda, argBusqueda }: Props) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    if (value === '' || value === null) {
      setColor("black");
    } else if (value === 'APLICADO') {
      setColor("green");
    } else {
      setColor("red");
    }
  }, [value]);

  return (
    <View style={styles.container}>

      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}

        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Aplicado y Pendiente' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);

          setArgBusqueda({ ...argBusqueda, status: item.value });
        }}
        renderLeftIcon={() => (
          <MaterialCommunityIcons name="list-status" size={24} color={color} />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});