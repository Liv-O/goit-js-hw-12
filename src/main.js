
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions';


import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
const input = document.querySelector('input');
const btn = document.querySelector('.load-btn');
let q, totalPages;
let page = 1;
let perPage = 15;


const hanlderSubmit = async function (event) {
    event.preventDefault();
    page = 1;
    q = event.target.elements['search-text'].value.toLowerCase().trim();
    if (q === '') {
        iziToast.error({
            message: 'Fill your answer',
        });
    } else {
        input.value = '';
        showLoader();
        clearGallery();
        try {
            const { hits: posts, totalHits } = await getImagesByQuery(q, page);
            hideLoader();
            totalPages = Math.ceil(totalHits / perPage);
            if (posts.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                    
            } else {
                createGallery(posts);
                page++;
                if (page >= totalPages) {
                    iziToast.warning({
                        message: "We're sorry, but you've reached the end of search results.",
                   });
                } else {
                     showLoadMoreButton();
                }        
            }
        } catch (error) {
            hideLoader();
            iziToast.error({
                message: `Sorry, ${error}`,
            });
        }
    }
        
};

async function handlerLoad(event) {
    hideLoadMoreButton();
    showLoader();
    try {
            const { hits: posts } = await getImagesByQuery(q, page);
            hideLoader();
            if (posts.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                    
            } else {
                createGallery(posts);
                const galleryItem = document.querySelector('.gallery-item');
                let {height} = galleryItem.getBoundingClientRect();
                height *= 2; 
                window.scrollBy({
                       top: height,
                       behavior: 'smooth' 
                    });
                page++;
                if (page >= totalPages) {
                    iziToast.warning({
                        message: "We're sorry, but you've reached the end of search results.",
                   });
                } else {
                     showLoadMoreButton();
                }         
            }
        } catch (error) {
            hideLoader();
            iziToast.error({
                message: `Sorry, ${error}`,
            });
        //
        }

}


form.addEventListener('submit', hanlderSubmit);
btn.addEventListener('click', handlerLoad);

