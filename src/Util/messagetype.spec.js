import  Message  from './messagetype';


describe('verificar tipos mensaje', () => {
    test('validar mensaje tipo error en upload', () => {
        //arrenge & act
        let  msg = Message(1,'upload');
        //asert
        expect(msg.title).toEqual('Sorry, we have fail with the server connection');
    });

    test('validar mensaje tipo mensaje listar video', () => {
        //arrenge & act
        let  msg = Message(1,'list');
        //asert
        expect(msg.title).toEqual('Sorry, we have fail with the server connection');
    });

    test('validar mensaje cuando carga correctamente un archivo', () => {
        //arrenge & act
        let  msg = Message(0,'upload');
    
        expect(msg.title).toEqual('Super! You has upload your file successfully!!!');

    });

    test('validar que retorne un objecto message', () => {
        //arrenge & act
        let  msg = Message(1,'list');
        //asert
        expect(typeof {value: msg}).toBe('object');

    });
})