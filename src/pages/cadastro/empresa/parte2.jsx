import Navbar from "../../../components/Home/navbar";
import { Link } from "react-router-dom";

function EmpresaParte2() {
    return (
        <>
            <Navbar />
            <div className="cadastro-empresa">
                <div className="title-cadastro">
                    <h2>Cadastre sua empresa</h2>
                    <p>Por favor, preencha os campos abaixo para criar uma conta na plataforma.</p>
                </div>
                <div className="inputs">
                    <div className="inputs-iniciais2">
                        <div className="inp2">
                            <label for="site" className="redes">Site (Opcional)
                                <input className="input2" type="url" name="url" id="url" />
                            </label>
                            <label className="redes">Instagram (Opcional)
                                <input type="url" name="url" id="url" />
                            </label>
                        </div>
                        <div className="inputs-textarea">
                            <label>Sobre a empresa</label>
                            <textarea cols="114" rows="8"></textarea>
                        </div>
                        <div className="file">
                            <label for="file">Foto da logo
                                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></input>
                            </label>
                        </div>
                    </div>
                    <div className="inputs-secundarios">
                        <h2>Dados de contato</h2>
                        <div className="line1">
                            <label>Nome da pessoa responsável
                                <input type="name" name="nome" placeholder="Digite o nome" />
                            </label>
                            <label>Celular
                                <input type="number" name="numero" placeholder="Digite o número para contato" />
                            </label>
                        </div>
                        <div className="line2">
                            <label>E-mail
                                <input type="email" email="email" placeholder="Digite o E-mail" />
                            </label>
                            <label>Cargo
                                <input type="text" placeholder="Digite o cargo" />
                            </label>
                        </div>

                    </div>
                  
                    <div className="buttons-cadastro">
                     <button className="btn-cancel">Cancelar</button>
                    <Link to="/empresa2">
                      <button className="btn-continue">Continuar</button>
                    </Link>
                
              </div>
                </div>
            </div>
        </>
    )
}

export default EmpresaParte2;