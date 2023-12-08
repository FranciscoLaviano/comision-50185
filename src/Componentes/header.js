import { StyleSheet, Text, View } from 'react-native'


const styles = StyleSheet.create({
    container:{
        backgroundColor:"E2EFE4",
        width:"100%",
        height:80,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20
    }
})


const Header = ({title=Producto}) => {

   return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
     

   )

}
export default Header;