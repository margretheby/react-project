# JavaScript Framework Course Assignment
<img src="https://github.com/margretheby/react-project/blob/main/billies.png" alt="Screenshot of the Billie's website on desktop">
This was the course assignment in the fall of 2023, during the frontend course at from Noroff school of technology and digital media.

## Description
After five weeks of learning React, the assignment was to create a website for an eCommerce store.

### Goal
To apply knowledge of React to build an eCom store. 

### Links
- <a href="https://billies.netlify.app" target="_blank">Billie's website</a>
- <a href="https://api.noroff.dev/api/v1/online-shop" target="_blank">API</a>

## Brief
The API you are using for this brief is: https://api.noroff.dev/api/v1/online-shop. You can find individual items by appending a product ID at the end of the API URL e.g. https://api.noroff.dev/api/v1/online-shop/f99cafd2-bd40-4694-8b33-a6052f36b435.

### Pages
You are tasked with build out the following pages for an eCom store:
- Homepage
- Individual product page
- Cart page
- Checkout success page
- Contact page

### General
- You pages should use a <Layout> component that contains a header and footer. The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.
- You will be using React Router to switch between pages.
- Your design should be responsive. 
- You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.
- You are not required to use TypeScript.

### Homepage
- The Homepage should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.

### Individual product page
- The individual product page should display data for a single product. 
- There should be an Add to cart button which, upon clicking, adds the product to the cart. 
- The product page should display the title of the product, the description and the image. 
- There should also be reviews listed for the product, if there are any. 
- You should use the discountedPrice property to display the price of the product. 
- If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

### Cart page 
- Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. 
- The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

### Checkout success page 
- The Checkout success page will display a message to the user notifying them that their order was successful. 
- There should be a link that lets a user go back to the store. 
- The cart must be cleared if the user gets to the Checkout success page.

### Contact page
- There will be a contact page which will contain a contact form with the following fields. 
- There must be form validation:
1. Full name (Minimum number of characters is 3, required)
2. Subject (Minimum number of characters is 3, required)
3. Email (Must be a valid email address, required)
4. Body (Minimum number of characters is 3, required)

## Built with
- Tailwind
- React, including:  
    - React Hook Form
    - React Router Dom

## Getting started
### Installing
1. Clone the repo:

``` 
git clone git@github.com:margretheby/react-project.git
npm install
```

## Contact
- <a href="https://mby-portfolio.netlify.app" target="_blank">Portfolio</a>
- <a href="https://www.linkedin.com/in/margrethe-by-6abb98226/" target="_blank">LinkedIn</a>
- <a href="https://github.com/margretheby" target="_blank">GitHub</a>
- <a href="mailto:margrethe.developer@gmail.com">margrethe.developer@gmail.com</a>
