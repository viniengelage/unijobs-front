import React, { useState } from 'react';

import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from 'primereact/inputswitch';
import { Editor } from 'primereact/editor';
import Button from 'react-bootstrap/Button'

import './product.css'

function Product(props) {
    
    const [priceType, setPriceType] = useState(1);
    const [productState, setProductState] = useState(1);
    const [promotion, setPromotion] = useState(false);
    const [suply, setSuply] = useState(true);
    const [description, setDescription] = useState('');

    let priceTypes = [
        { label: 'Preço Fixo', value: 1  },
        { label: 'A partir de', value: 2  },
    ]

    let contitionProductState = [
        { label: 'Novo', value: 1  },
        { label: 'Usado (estado de novo)', value: 2  },
        { label: 'Usado (algumas marcas de uso)', value: 3  },
        { label: 'Usado (condições razoável)', value: 4 },
        { label: 'Restaurado', value: 5  },
    ]

    const onPriceTypeChange = (e) => setPriceType(e.value);
    const onProductState = (e) => setProductState(e.value);
    const changePromotionCheck = (e) => setPromotion(e.value);
    const changeSuply = (e) => setSuply(e.value);
    const onDescription = (e) => setDescription(e.htmlValue);

    let disabled = !promotion ? 'disable' : ''; 

    return (
        <Card title="Adicionar Produto" >

            <div className="row product-row">                
                <FormGroup column={'12'} htmlFor="inputTitulo" label="Imagens" 
                            help="Insira uma imagem" >

                    <div className="product-column inputImages">
                        <div className="image"><p>DESTAQUE</p></div>
                        <div className="image"><span>IMAGEM 2</span></div>
                        <div className="image"><span>IMAGEM 3</span></div>
                        <div className="image"><span>IMAGEM 4</span></div>
                    </div>
                </FormGroup>
            </div>

            <div className="row product-row">                
                <FormGroup column={'12'} htmlFor="inputTitulo" label="Título" 
                            help="O título deverá conter no máximo 60 caracteres" >
                    <input  className="form-control"
                            type="text" />
                </FormGroup>
            </div>

            <div className="row product-row">

                <FormGroup column={'5'} htmlFor="inputPreco" label="Preco" >
                    <div className="product-column">

                            <Dropdown   value={priceType }
                                        className="column preco"
                                        options={ priceTypes } 
                                        onChange={ onPriceTypeChange } />

                            <span className="group">R$</span>
                            <InputNumber    value={0}
                                            inputClassName="text-right"
                                            className="column input"
                                            mode="decimal" 
                                            minFractionDigits={2} />

                    </div>
                </FormGroup>
                <FormGroup column={'7'} htmlFor="inputPrecoPromoção" label="Preço Promocional" 
                            help="Mostre às pessoas que você está vendendo esse produto com desconto 
                                    definindo um preço promocional, além do preço normal.">
                    
                    <div className="product-column">
                        <span className={`group ${disabled}`} >R$</span>
                        <InputNumber    value={0} 
                                        disabled={!promotion}
                                        inputClassName="text-right"
                                        className="column input"
                                        mode="decimal" 
                                        minFractionDigits={2} />


                        <InputSwitch    checked={promotion}
                                        className="column checked"
                                        onChange={changePromotionCheck} />

                        <p>{!promotion ? 'ativar' : 'desativar'} preço promocional</p>
                    </div>
                </FormGroup>
            </div>

            <div className="row product-row">
                <FormGroup column={'5'} htmlFor="inputPreco" label="Condição do Produto" >
                    <div className="product-column">
                            <Dropdown   value={productState }
                                        className="column p-contition"
                                        options={ contitionProductState } 
                                        onChange={ onProductState } />                         

                    </div>                    
                </FormGroup>
                <FormGroup column={'7'} htmlFor="inputPreco" label="Fornecimento" >
                    <div className="product-column"> 
                        <InputSwitch    checked={suply}
                                        className="column checked"
                                        onChange={changeSuply} />

                        <p>{!suply ? 'Indisponível' : 'Em Estoque'}</p>
                    </div>
                </FormGroup>                       

            </div>
            <div className="row product-row">
                <FormGroup column={'12'} htmlFor="inputPreco" label="Descrição" >
                    <Editor style={{height:'320px'}} 
                            value={description} 
                            onTextChange={onDescription} />
                </FormGroup>                       

            </div>
            <div className="row btn">
                <Button variant="success"  size="lg" >Salvar</Button>
                <Button variant="light" size="lg">Cancelar</Button>
            </div>
        </Card>
    );
}

export default Product;