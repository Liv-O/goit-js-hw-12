import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery; 

export function createGallery(images) {

    const list = document.querySelector('.gallery');
   
    const imagesElements = images.map(({ webformatURL, largeImageURL, tags, views, likes, comments, downloads }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
           <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
        </a>
        <table class="gallery-item-desc">
         <tr>
          <th>Likes</th>
          <th>Views</th>
          <th>Comments</th>
          <th>Downloads</th>
         </tr>
         <tr>
          <td>${likes}</td>
          <td>${views}</td>
          <td>${comments}</td>
          <td>${downloads}</td>
         </tr>
        </table>
       </li>`;
    }).join('');
     
    if (list) {
        list.insertAdjacentHTML('beforeend', imagesElements);

        if (!gallery) {

            gallery = new SimpleLightbox('.gallery a', {
                captions: true,
                captionsData: 'alt',
                captionPosition: 'bottom',
                captionDelay: 250,
            });

        } else {
            gallery.refresh();
        }

        gallery.on('show.simplelightbox', function (event) {
            console.log(`opened image : ${event.target.querySelector('img').alt} :) `);
        });
    }
    
}

export function clearGallery() {
    const list = document.querySelector('.gallery');
    
   if(list) list.innerHTML = '';

}

export function showLoader() {
    const loader = document.querySelector('.loader');
    
    if(loader) loader.classList.remove('hidden');
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    
    if(loader) loader.classList.add('hidden');
}

export function showLoadMoreButton() {
    const btn = document.querySelector('.load-btn');

    if(btn) btn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
    const btn = document.querySelector('.load-btn');

     if(btn) btn.classList.add('hidden');
}