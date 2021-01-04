import React, { useState } from 'react'
import { encrypt, decrypt } from './encryptDecrypt'
import { FiCopy } from 'react-icons/fi'
import { useSnackbar } from 'notistack';
import {
    BodyContainer,
    HashButton,
    HashContainer,
    HashInput,
    HashSection,
    HashSelect,
    PassInput,
    UnhashSection,
    HashSelectOption,
    IconDiv,
    Separator,
    NoteDiv
} from './Hash.elements'
const crypto = require('crypto');

const HashMethod = {

    One: "aes-128-cfb8",
    Two: "aes-128-cbc",
    Three: "aes-256-ctr",
    Four: "des",
}
const Hash = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [word, setWord] = useState('');
    const [hashed, setHashed] = useState('');
    const [decryptedText, setdecryptedText] = useState('')
    const [algorithm, setAlgorithm] = useState('aes-128-cfb8');
    const [key, setKey] = useState(crypto.randomBytes(16));
    const [iv, setIv] = useState(crypto.randomBytes(16));



    const handleChange = (event) => {
        setWord(event.target.value);
    };
    const selectChange = (event) => {
        console.log(`this is event ${event.target.value}`);
        if (event.target.value === 'aes-128-cfb8' || event.target.value === 'aes-128-cbc') {
            setAlgorithm(event.target.value);
            setKey(crypto.randomBytes(16))
            setIv(crypto.randomBytes(16))
            console.log(`key-a: ${key}`);
            console.log(`iv-a: ${iv}`);
            console.log(`algorithm-a: ${algorithm}`);
        } else if (event.target.value === 'des') {
            setAlgorithm(event.target.value);
            setKey(crypto.randomBytes(8))
            setIv(crypto.randomBytes(8))
            console.log(`key-b: ${key}`);
            console.log(`iv-b: ${iv}`);
            console.log(`algorithm-b: ${algorithm}`);
        } else if (event.target.value === 'aes-256-ctr') {
            setAlgorithm(event.target.value);
            setKey(crypto.randomBytes(32))
            setIv(crypto.randomBytes(16))
            console.log(`key-c: ${key}`);
            console.log(`iv-c: ${iv}`);
            console.log(`algorithm-c: ${algorithm}`);
        } else if (event.target.value === '') {
            setAlgorithm('aes-128-cfb8');
            setKey(crypto.randomBytes(16))
            setIv(crypto.randomBytes(16))
        }
    };

    const encryptHandleClick = () => {

        const data = encrypt(word, algorithm, key, iv)
        setHashed(data.encryptedData)
        console.log(data);

    }
    const clickCopyBtn = (variant) => () => {
        navigator.clipboard.writeText(hashed)
        enqueueSnackbar('Copied to Clipboard!', { variant });
    };

    const decryptHandleClick = () => {
        const decrypted = decrypt(word, algorithm, key, iv, hashed)
        console.log(decrypted);
        setdecryptedText(decrypted)

    }

    return (

        <BodyContainer>
            <HashContainer>
                <HashSection>

                    <HashInput placeholder='Your text' value={word} onChange={handleChange} />
                    <HashSelect
                        onChange={selectChange} >

                        {Object.values(HashMethod).map((item, index) => (

                            <HashSelectOption key={index} value={item}>{item}</HashSelectOption>
                        ))}
                    </HashSelect>
                    <HashButton onClick={encryptHandleClick}>Encrypt</HashButton>

                    <PassInput value={hashed} type="text" readOnly="readonly" />


                    <IconDiv onClick={clickCopyBtn('success')} >{hashed && <FiCopy cursor='pointer' color='whitesmoke' size={40} />}</IconDiv>


                </HashSection>
                <Separator />
                <UnhashSection>
                    <HashInput placeholder='Your Hash' value={hashed} onChange={handleChange} />
                    <HashButton onClick={decryptHandleClick}>Decrypt</HashButton>
                    <PassInput value={decryptedText} type="text" readOnly="readonly" />

                </UnhashSection>
            </HashContainer>
            <NoteDiv>🔑NOTE: This  Process Automatically  generates random Bytes size as SECRET KEY to handle each encryption algorithms.   </NoteDiv>
        </BodyContainer>

    )
}

export default Hash
