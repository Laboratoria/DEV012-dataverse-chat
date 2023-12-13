export const footer = () => {
    const htmlTemplate =
    <p> Dev by Cami & Vane </p>


    const footer = document.createElement('footer');
    footer.classList.add('container');
    footer.innerHTML = htmlTemplate;
    return footer;
} 