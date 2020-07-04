import styled from 'styled-components';
import { lighten } from 'polished';

export const Title = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    color: #0E346A;
    margin: 12px auto;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-around;

    margin: 20px auto 100px;
    max-width:1000px;

    background: #E5E5E5;
    mix-blend-mode: normal;
    padding: 50px;
    border-radius: 3px;

    div {
        margin-bottom:10px;
        strong {
            /* color: #0E346A; */
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            margin-left: 5px;
        }
        div {
            margin-top:5px;
            input{
                width: 400px;
                height: 40px;
                padding: 0 10px;
                border: 0;
                background: #FFFFFF;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
                border-radius: 3px;
                outline: none;
            }
            input[type=file]{
                display: none;
            }
            label{
                width: 400px;
                height: 40px;
                padding: 0 10px;
                border: 0;
                background: #FFFFFF;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
                border-radius: 3px;
                outline: none;
                cursor: pointer;
                display: flex;
                align-items: center;
            }
            input[type=submit]{
                width: 200px;
                height: 40px;
                padding: 0 10px;
                border: 0;
                background: #0E346A;
                color: #FFFFFF;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
                border-radius: 3px;
                outline: none;

                &:hover{
                    background: ${lighten(0.2, '#0E346A')}
                }

            }
            select {
                width: 400px;
                height: 40px;
                padding: 0 10px;
                border: 0;
                background: #FFFFFF;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
                border-radius: 3px;
                outline: none;
            }
        }
    }
`;