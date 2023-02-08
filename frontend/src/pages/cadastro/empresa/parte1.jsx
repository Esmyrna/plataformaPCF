import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Home/navbar';
import './style.scss'
function Empresa() {
    function handleformpage(op2) {
         const [link, setLink] = useState('/empresa2')
        
    }
    return (
       <>
     <Navbar />
     <form>
       <div className="cadastro-empresa">
            <div className="title-cadastro">
                <h2>Cadastre sua empresa</h2>
                <p>Por favor, preencha os campos abaixo para criar uma conta na plataforma.</p>
            </div>
            <div className="inputs">
                <div className="inputs-iniciais">
                    <label for="nome da empresa">Nome da empresa
                        <input  type="text" name="nome" />
                    </label>
                    <label className="cnpj" for="cnpj">CNPJ
                        <input  type="number" number="numero" />
                    </label>
                </div>
                 
                <div className="inputs-complementares">
                <div className="inputs-secundarios1">
                    <label for="cep">CEP
                        <input type="number" number="numero" />
                    </label>

                    <label for="cidade">Cidade
                        <input type="text" text="texto" />
                    </label>

                    <label for="logradouro">Logradouro
                        <input type="text" text="texto" />
                    </label>
                    <label for="complemento">Complemento
                        <input type="number" number="numero" />
                    </label>
                </div>
               
                <div className="inputs-secundarios2">
                    <label for="estado">Estado
                        <input type="text" text="texto" />
                    </label>
                    <label for="bairro">Bairro
                        <input type="text" text="texto" />
                    </label>
                    <label for="numero">Número
                        <input type="number" number="numero" />
                    </label>
                    <label for="referencia">Referência
                        <input type="text" text="texto" />
                    </label>
                </div>
                </div>

               
                <div className="radio">
                 <input type="radio" name="opcao"   checked/>
                <Link to="/empresa2">
                  <input  type="radio" name="opcao"     />
                </Link>
            
              </div>
              <div className="buttons-cadastro">
                     <button className="btn-cancel">Cancelar</button>
                    <Link to="/empresa2">
                      <button className="btn-continue">Continuar</button>
                    </Link>
                
              </div>
            </div>
        </div>
        </form>
       </>
        
    )
}

export default Empresa;