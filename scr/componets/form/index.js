// Importação das dependências necessárias para o componente
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable} from "react-native"
import styles from "./style.js";

// Definição do componente "Form" como padrão para exportação
export default function Form(){

   
    // Retorno do componente "Form" que inclui o formulário e o componente personalizado "ResultImc"
    return(
        <Pressable style={styles.comteiner} onPress={Keyboard.dismiss} >
        {/* faz com que, ao clicar em qqr lugar da tela o teclado feche */}


            <View >
            <Text style={styles.titulos}>  Nome</Text>
            <TextInput style={styles.caixa} placeholder="Ex: paula tejando" keyboardType="numeric"/>

            <Text style={styles.titulos}> Telefone</Text>
            <TextInput  style={styles.caixa} placeholder="Ex: 4002-8922" keyboardType="numeric"/>

            <Text style={styles.titulos} >   Email</Text>
            <TextInput style={styles.caixa} placeholder="Ex: sexo@gmail.com" keyboardType="numeric"/>



            

            <TouchableOpacity style={styles.caixaBotao}>
            <Text style={styles.botao} > ENVIAR </Text>
            </TouchableOpacity>
            
            <Text style={styles.nomeGay} > matheus </Text>


            </View>
       
         </Pressable>
    )
}
