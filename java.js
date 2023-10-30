console.log('Person1: shows ticket')
console.log('Person2: shows ticket')

const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn = new Promise((resolve, reject) => resolve('Popcorn'))

    const addButter = new Promise((resolve, reject) => resolve('Butter'))

    const getColdDrinks = new Promise((resolve, reject) => resolve('ColdDrinks'))

    let ticket = await promiseWifeBringingTicket;

    console.log(`wife: I have the ${ticket}`);
    console.log(`husband: We should go in`);
    console.log(`wife: No I am hungry`);

    let popCorn = await getPopcorn;

    console.log(`husband: I got some ${popCorn}`);
    console.log(`husband: We should go in`);
    console.log(`Wife: I need butter on my popcorn`);

    let butter = await addButter;

    console.log(`husband: I got some ${butter} on popcorn`);
    console.log(`husband: Anything else darling?`);
    console.log(`Wife: I want cold drinks also`);
    console.log(`husband: wait a minute`);

    let colddrinks = await getColdDrinks;

    console.log(`husband: I got you ${colddrinks}`);
    console.log(`husband: Anything else darling?`);
    console.log(`Wife: No, let's go we are getting late for movie`);
    console.log(`husband: Thank you for the reminder *grins*`);

    return ticket;
}

preMovie().then((m) => console.log(`Person3: shows ${m}`))
console.log('Person4: shows ticket')
console.log('Person5: shows ticket')
