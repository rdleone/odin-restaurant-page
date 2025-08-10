export function createMenuItem(name, description, price) {

    const getName = () => name.toUpperCase();
    const getDescription = () => description;
    const getPrice = () => `\$${price}`;

    return {
        getName,
        getDescription,
        getPrice 
    }
}