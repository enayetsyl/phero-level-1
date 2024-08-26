// declaring variable
const allNewsCategoryContainer = document.getElementById('all-news-catagory-container');

// fatching all news category

document.addEventListener('DOMContentLoaded', () => {
    allNewsCategoryHandler();
})

const allNewsCategoryHandler = async () => {
    const response = await fetch (`https://openapi.programming-hero.com/api/news/categories`)
    const data = await response.json();
    const categories = data.data.news_category;
    console.log(categories);

    categories.forEach(category => {
        const categoriesDiv = document.createElement('div');

        categoriesDiv.innerHTML = `
       
        <p class="text-[#858585] text-lg font-normal hover:text-[#5d5fef]">${category.category_name}</p>
        `
        allNewsCategoryContainer.appendChild(categoriesDiv);
        console.log(category)
    });
}