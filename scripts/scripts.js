 /**
 * Escuchar cuando el usuario haga click en el corazoncito
 * Cambiar de clase al corazoncito
 */

function addEventToLikeButton() {
    const commentLikeButton = document.querySelector('#comment-like-button');
    
    commentLikeButton.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.classList.add('comment__like');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            icon.classList.remove('comment__like');
        }
    })
}

addEventToLikeButton();


/**
 * El usuario escriba su comentario
 * Escuchar cuando lo envíe
 * Guardar ese valor en JS
 * Imprimir ese valor con el formato del comentario
 */


//Escuchar cuando el usuario envíe el mensaje
const comentForm = document.querySelector('#coment-form');
const commentMainContainer = document.querySelector('#comments-main-container');

comentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //Guardar el mensaje en una variable
    const message = document.querySelector('#comment-textarea').value;

    // Manera insegura:
    const commentTemplate = `
        <div class="comment">
            <img src="https://via.placeholder.com/50" alt="">
            <div class="comment__content">
            <div class="comment__author">Ricardo Velasco</div>
            <div class="comment__text">${message}</div> 
            <div class="comment__footer">
                <div class="comment__date">18/07/2020</div>
                <button id="comment-like-button">
                    <i class="far fa-heart comment__like"></i>
                </button>
            </div>
            </div>
        </div>
    `;

    /**
     * La manera correcta seria:
     * const div = document.createElement('div');
     * div.classList.add('comment');
     * const img = document.createElement('img');
     * img.src = 'https://via.placeholder.com/50';
     * 
     * commentMainContainer.appendChild(div);
     */


    commentMainContainer.innerHTML = commentMainContainer.innerHTML + commentTemplate;
    addEventToLikeButton();
});
