import { Button, FlatList, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProdutoLista from "./ProdutoLista";
import { TextInput } from "react-native";
import { useState } from "react";

const produtos = [
    {
        id: 1,
        nome: "Homer",
        descricao: "Cobertura rosa de chocolate branco com granulado colorido, recheio de Leite Ninho.",
        preco: "10,00",
        imagem: require("../assets/homer.jpg")
    },
    {
        id: 2,
        nome: "Brigadeiro",
        descricao: "Cobertura de brigadeiro com granulado, recheio de chocolate.",
        preco: "12,00",
        imagem: require("../assets/brigadeiro.jpg")
    },
    {
        id: 3,
        nome: "Doce de Leite",
        descricao: "Cobertura de Doce de Leite, recheio de Doce de Leite.",
        preco: "12,00",
        imagem: require("../assets/docedeleite.jpg")
    },
    {
        id: 4,
        nome: "Leite Ninho",
        descricao: "Cobertura de chocolate branco com Ninho polvilhado, recheio de brigadeiro de Leite Ninho.",
        preco: "12,00",
        imagem: require("../assets/leiteninho.jpg")
    },
    {
        id: 5,
        nome: "Morango",
        descricao: "Cobertura de brigadeiro de Nesquik com pedaços de morango, recheio de brigadeiro de Leite Ninho com morangos.",
        preco: "12,00",
        imagem: require("../assets/morango.jpg")
    },
    {
        id: 6,
        nome: "Limão",
        descricao: "Cobertura de mousse de limão com raspas de limão e chocolate branco, recheio de chocolate branco.",
        preco: "12,00",
        imagem: require("../assets/limao.jpg")
    },
    {
        id: 7,
        nome: "Oreo",
        descricao: "Cobertura de chocolate branco com pedaços de bolacha Oreo, recheio de brigadeiro de Oreo.",
        preco: "13,00",
        imagem: require("../assets/oreo.jpg")
    },
    {
        id: 8,
        nome: "Kinder Bueno",
        descricao: "Cobertura de chocolate com Kinder Bueno por cima, recheio de Nutella.",
        preco: "14,00",
        imagem: require("../assets/kinderbueno.jpg")
    },
    {
        id: 9,
        nome: "Kit-Kat",
        descricao: "Cobertura de chocolate ao leite com um Kit-Kat por cima, recheio de chocolate ao leite.",
        preco: "13,00",
        imagem: require("../assets/kitkat.jpg")
    },
    {
        id: 10,
        nome: "Red Velvet",
        descricao: "Massa de Red Velvet, cobertura de chocolate branco e recheio de leite ninho.",
        preco: "14,00",
        imagem: require("../assets/redvelvet.jpg")
    }
]

export default function Cardapio() {
    return (
        <View style={css.container}>
            <FlatList
                data={produtos}
                renderItem={({ item }) => <ProdutoLista nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        backgroundColor: '#FFD9E7'
    }
})