renderTextandInputs = (obje) => {

    var keyvalue_to_json = JSON.parse(obje.keyValues);
    var textinputName = [];
    var foundTextFields = [];
    for (let i = 0; i < keyvalue_to_json.inputFields.length; i++) {
        if (keyvalue_to_json.inputFields[i].type === 'textfield') {
            foundTextFields.push(<TextInput onChangeText={(text) => this.postToBmp({ text })} style={{ borderWidth: 1 }}>{keyvalue_to_json.inputFields[i].placeholderText}</TextInput>) &&
                textinputName.push(<Text>{keyvalue_to_json.inputFields[i].title}</Text>)
        }
    }

    return (
        <View>
            <ListItem
                title={obje.name}
                subtitle={obje.description}
                onPress={() => this.postToBmp(obje)}
            />
            <View >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1 }}>
                        {textinputName}
                    </View>
                    <View style={{ flex: 1 }}>
                        {foundTextFields}
                    </View>
                </View>
            </View>
        </View>
    )
}