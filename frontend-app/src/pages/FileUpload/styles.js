import styled from 'styled-components';

export const Container = styled.div`
    outline: 2px dashed grey;
    outline-offset: -10px;
    margin-top: 100px;
    background: #c0d6e4;
    padding: 10px 10px;
    position: relative;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 300px;
        display: flex;
        flex-direction: column;
        label {
            font-size: 1.2em;
            text-align: center;
            padding: 50px 0;
        }
    
        input {
            opacity: 0; /* invisible but it's there! */
            width: 100%;
            height: 200px;
            border: 1px solid #ddd;
            position: absolute;
            cursor: pointer;
        }
    
        button {
            height: 48px;
            background: #7159c1;
            border-radius: 4px;
            font-size: 16px;
            padding: 0 20px;
            margin: 10px;
            color: #fff;
            font-weight: bold;
            border: 0;
            cursor: pointer;
            
            &:hover {
                opacity: 0.8;
            }
        }
    }

`;