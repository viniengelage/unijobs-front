import React, {useState, useEffect} from 'react';
import { FiUser, FiPhoneCall, FiAtSign, FiAirplay, FiBox, FiShoppingBag, FiShoppingCart } from 'react-icons/fi'
import { Title,Form } from './styles'

import Header from '../../components/Header';
import Footer from '../../components/Footer'

function ProductRegister(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const product = {
        name,
        email,
        phone,
        course,
        title,
        description,
        price,
        image,
    }

    const [selectedFile, setSelectedFile] = useState({});
    function fileSelectHandler(event){
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0])
    }
    function fileUpHandler(){
        const fd = new FormData();
        fd.append('image', selectedFile, selectedFile.name);

        
    }

    return (
        <>
            <Header />
            <Title>Cadastrar produto</Title>
            <Form>
                <div>
                    <FiUser size={20} />
                    <strong>Nome completo</strong>
                    <div>
                        <input placeholder="Digite aqui..." required />
                    </div>
                </div>
                <div>
                    <FiPhoneCall size={20} />
                    <strong>Telefone</strong>
                    <div>
                        <input placeholder="Digite aqui..." type="tel" required />
                    </div>
                </div>
                <div>
                    <FiAtSign size={20} />
                    <strong>Email</strong>
                    <div>
                        <input placeholder="Digite aqui..." type="email" required/>
                    </div>
                </div>
                <div>
                    <FiAirplay size={20}/>
                    <strong>Curso</strong>
                    <div>
                        <select name="courses" id="cars" required>
                        <option value="administração">Administração</option>
                        <option value="sistemas">Análise e Desenvolvimento de Sistemas</option>
                        <option value="arquitetura">Arquitetura e Urbanismo</option>
                        <option value="biomedicina">Biomedicina</option>
                        <option value="biologicas">Ciências Biologicas</option>
                        <option value="contabeis">Ciências Contábeis</option>
                        <option value="jornalismo">Comunicação Social - Jornalismo</option>
                        <option value="midias">Comunicação Social - Mídias Digitais</option>
                        <option value="publicidade">Comunicação Social - Publicidade e Propaganda</option>
                        <option value="direito">Direito</option>
                        <option value="educacaofisica">Educação Física</option>
                        <option value="enfermagem">Enfermagem</option>
                        <option value="engcivil">Engenharia Cívil</option>
                        <option value="engeletrica">Engenharia Elétrica</option>
                        <option value="engmecanica">Engenharia Mecânica</option>
                        <option value="engproducao">Engenharia de Produção</option>
                        <option value="engsoftware">Engenharia de Software</option>
                        <option value="farmacia">Farmácia</option>
                        <option value="fisioterapia">Fisioterapia</option>
                        <option value="veterinaria">Medicina Veterinária</option>
                        <option value="nutricao">Nutrição</option>
                        <option value="pedagogia">Pedagogia</option>
                        <option value="psicologia">Psicologia</option>
                        </select>
                    </div>
                </div>

                {/* PRODUTOS */}
                <div>
                    <FiBox size={20} />
                    <strong>Titulo do produto</strong>
                    <div>
                        <input placeholder="Digite aqui..." type="email" required/>
                    </div>
                </div>
                <div>
                    <FiShoppingCart size={20} />
                    <strong>Preço do produto</strong>
                    <div>
                        <input placeholder="Digite aqui..." type="email" required/>
                    </div>
                </div>
                <div>
                    <FiShoppingBag size={20} />
                    <strong>Descrição do produto</strong>
                    <div>
                        <input placeholder="Digite aqui..." type="email" required/>
                    </div>
                </div>
                <div>
                    <FiAirplay size={20} />
                    <strong>Imagem</strong>
                    <div>
                        <label htmlFor='selecao-arquivo'>Selecionar um arquivo</label>
                        <input id='selecao-arquivo' type='file' onChange={fileSelectHandler}></input>
                    </div>
                </div>
                <div>
                    <div>
                        <input placeholder="Digite aqui..." type="submit" required/>
                    </div>
                </div>
            </Form>
            <Footer/>
        </>
    )
}

export default ProductRegister;