import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list/index';
import {global} from '../../styles/global';

const Register = ({navigation}) => {
  // for dropdown menu selection
  const [Selected, setSelected] = React.useState('');

  const [fname, setFname] = React.useState('');
  const [lname, setLname] = React.useState('');
  const [contact_no, setContact] = React.useState('');
  const [nic, setNic] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [slme_no, setSlme] = React.useState('');
  const [address, setAdress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confmPassword, setConfmPassword] = React.useState('');

  const data = [
    {key: '1', value: 'Doctor'},
    {key: '2', value: 'Dealer'},
    {key: '3', value: 'Researcher'},
  ];

  console.log(Selected);

  const handleReg = async () => {
    console.log(Selected);
    let Regtitle;

    if (Selected === '1') {
      Regtitle = 'doctor';
    }
    if (Selected === '2') {
      Regtitle = 'dealer';
    }
    if (Selected === '3') {
      Regtitle = 'researcher';
    }
    if (password.toString() === confmPassword.toString()) {
      const response = await fetch(
        'https://nice-red-bunny-gown.cyclic.app/api/users/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: Regtitle,
            fname,
            lname,
            contact_no,
            nic,
            district,
            email,
            slme_no,
            address,
            password,
          }),
        },
      );
      console.log(response.status);
      if (response.status === 200) {
        navigation.navigate('Login');
      } else if (response.status === 400) {
        // eslint-disable-next-line no-alert
        alert('Unsuccessful');
      } else {
        // eslint-disable-next-line no-alert
        alert('Bad Info');
      }
    } else {
      alert('Password Not Match');
    }
    console.log(
      Regtitle,
      fname,
      lname,
      contact_no,
      nic,
      district,
      email,
      slme_no,
      address,
      password,
    );
  };

  return (
    <SafeAreaView style={global.bgImage}>
      <ImageBackground
        source={require('../../assets/background.png')}
        resizeMode="cover"
        style={global.bgImage}>
        {/*Header components*/}
        <View style={global.header}>
          <Image
            source={require('../../assets/logoMini.png')}
            resizeMode="stretch"
            style={global.logoMini}
          />
          <Text style={global.headText}>Ayurveda Medi APP</Text>
          <Text style={global.subHeadText}>Registration</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../assets/menu.png')}
              style={global.menuIcon}
            />
          </TouchableOpacity>
        </View>

        {/*form content components*/}
        <ScrollView>
          <View style={styles.dropDown}>
            {/*dropdown content*/}
            <SelectList
              data={data}
              setSelected={Selected => setSelected(Selected)}
              save="value"
              placeholder="Register As"
              boxStyles={{
                backgroundColor: '#ffffff',
                borderColor: '#1CAB4C',
                borderWidth: 2,
                borderRadius: 25,
                height: 50,
              }}
              inputStyles={{fontSize: 16, color: '#47D50D'}}
              dropdownTextStyles={{fontSize: 16, color: '#47D50D'}}
              dropdownStyles={{
                backgroundColor: '#ffffff',
                borderWidth: 0,
                borderRadius: 0,
              }}
            />
          </View>
          {/*input fields for doctor registration*/}
          <View style={styles.form}>
            <Text style={styles.textLabel}>First Name :</Text>
            <TextInput
              placeholder=""
              onChangeText={value => setFname(value)}
              value={fname}
              defaultValue={fname}
              style={styles.textInput}
              placeholderTextColor="#4db871"
            />
          </View>
          <View style={styles.line} />

          <View style={styles.form}>
            <Text style={styles.textLabel}>Last Name : </Text>
            <TextInput
              placeholder=""
              onChangeText={value => setLname(value)}
              value={lname}
              defaultValue={lname}
              style={styles.textInput}
              placeholderTextColor="#4db871"
            />
          </View>
          <View style={styles.line} />

          <View style={styles.form}>
            <Text style={styles.textLabel}>Contact No : </Text>
            <TextInput
              placeholder=""
              onChangeText={value => setContact(value)}
              value={contact_no}
              defaultValue={contact_no}
              style={styles.textInput}
              placeholderTextColor="#4db871"
            />
          </View>
          <View style={styles.line} />

          <View style={styles.form}>
            <Text style={styles.textLabel}>NIC : </Text>
            <TextInput
              placeholder=""
              onChangeText={value => setNic(value)}
              value={nic}
              defaultValue={nic}
              style={styles.textInput}
              placeholderTextColor="#4db871"
            />
          </View>
          <View style={styles.line} />

          <View style={styles.form}>
            <Text style={styles.textLabel}>District : </Text>
            <TextInput
              placeholder=""
              onChangeText={value => setDistrict(value)}
              value={district}
              defaultValue={district}
              style={styles.textInput}
              placeholderTextColor="#4db871"
            />
          </View>
          <View style={styles.line} />

          <View style={styles.form}>
            <Text style={styles.textLabel}>Email : </Text>
            <TextInput
              placeholder=""
              onChangeText={value => setEmail(value)}
              value={email}
              defaultValue={email}
              style={styles.textInput}
              placeholderTextColor="#4db871"
            />
          </View>
          <View style={styles.line} />

          <View style={styles.form}>
            <Text style={styles.textLabel}>SLME NO : </Text>
            <TextInput
              placeholder=""
              onChangeText={value => setSlme(value)}
              value={slme_no}
              defaultValue={slme_no}
              style={styles.textInput}
              placeholderTextColor="#4db871"
            />
          </View>
          <View style={styles.line} />

          <View style={styles.form}>
            <Text style={styles.textLabel}>Address : </Text>
            <TextInput
              placeholder=""
              onChangeText={value => setAdress(value)}
              value={address}
              defaultValue={address}
              style={styles.textInput}
              placeholderTextColor="#4db871"
            />
          </View>
          <View style={styles.line} />

          <View style={styles.form}>
            <Text style={styles.textLabel}>Password : </Text>
            <TextInput
              placeholder=""
              onChangeText={value => setPassword(value)}
              value={password}
              defaultValue={password}
              secureTextEntry={true}
              style={styles.textInput}
              placeholderTextColor="#4db871"
            />
          </View>
          <View style={styles.line} />

          <View style={styles.form}>
            <Text style={styles.textLabel}>Confirm Password : </Text>
            <TextInput
              placeholder=""
              onChangeText={value => setConfmPassword(value)}
              value={confmPassword}
              defaultValue={confmPassword}
              secureTextEntry={true}
              style={styles.textInput}
              placeholderTextColor="#4db871"
            />
          </View>
          <View style={styles.line} />
          <View style={styles.regBtn}>
            <Button title="Register" color="#47D50D" onPress={handleReg} />
          </View>
          <Text style={styles.textlog}>
            {' '}
            ───── Already have an Account? ────
          </Text>
          <Text
            style={styles.logBtn}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
          <Text>""</Text>
          <Text>""</Text>
          <Text>""</Text>
          <Text>""</Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropDown: {
    marginTop: '15%',
    marginLeft: '15%',
    marginRight: '15%',
  },
  form: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '10%',
    marginTop: '2%',
    height: 50,
  },
  textLabel: {
    color: 'black',
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 2,
    fontSize: 16,
  },
  line: {
    backgroundColor: '#000000',
    height: 2,
    width: '80%',
    marginLeft: '10%',
  },
  regBtn: {
    borderColor: '#47D50D',
    width: 150,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
  },
  textlog: {
    color: 'black',
    alignSelf: 'center',
    marginTop: 40,
  },

  logBtn: {
    marginTop: 10,
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Register;
