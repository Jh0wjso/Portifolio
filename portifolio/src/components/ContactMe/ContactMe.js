import "./ContactMe.css"

export default function ContactMe(){
    return(
        <div class="contact-content rounded container">
          
        <section class='p-3'>
          <h2 class="text-center h1 py-5">Mande uma mensagem</h2>

          <p class="text-center mb-5">Para me contar é simples escreva sua mensagem e aperte em enviar.</p>
      
            <div class="row">

                <div class="col-md-8 col-xl-9">
                    <form>

                    <div class="row">

                        <div class="col-md-6">
                        <div class="md-form">
                            <input type="text" id="contact-name" class="form-control"/>
                            <label for="contact-name" class="">Seu Nome</label>
                        </div>
                        </div>

                        <div class="col-md-6">
                        <div class="md-form">
                            <input type="text" id="contact-email" class="form-control"/>
                            <label for="contact-email" class="">Seu email</label>
                        </div>
                        </div>    
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                        <div class="md-form">
                            <input type="text" id="contact-Subject" class="form-control"/>
                            <label for="contact-Subject" class="">Assunto</label>
                        </div>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="contact-message" class="form-control md-textarea" rows="3"></textarea>
                            <label for="contact-message">Sua Mensagem</label>
                        </div>

                        </div>
                    </div>

                    </form>

                    <div class="text-center text-md-left">
                    <a class="btn-send btn">Enviar</a>
                    </div>
                </div>

                <div class="col-md-4 col-xl-3 text-center">
                    <ul class="list-unstyled">
                    <li>
                        <i class="fas fa-map-marker-alt fa-2x blue-text"></i>
                        <p>Bandeirantes-PR, Brazil</p>
                    </li>

                    <li>
                        <i class="fa fa-phone fa-2x mt-4 blue-text"></i>
                        <p>+55 14 997981721</p>
                    </li>

                    <li>
                        <i class="fa fa-envelope fa-2x mt-4 blue-text"></i>
                        <p>jhonatansilverio1258@gmail.com</p>
                    </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    );
}