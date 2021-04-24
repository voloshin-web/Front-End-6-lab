import {postData} from '../service/service';

const form = () => {
    const form = document.querySelector('form'),
          inputs = document.querySelectorAll('input');

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const formData = new FormData(form);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));

    
        postData('http://localhost:3000/requests', json)
            .then(res => {
                console.log(res);
            })
            .catch(() => {
                console.log('Error!');
            })
            .finally(() => {
                clearInputs();
            });
    });
};

export default form;