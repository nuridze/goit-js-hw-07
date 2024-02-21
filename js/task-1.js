/* Порахує й виведе в консоль кількість категорій
 в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories
 знайде й виведе в консоль текст заголовка
 елемента (тегу <h2>) і кількість елементів у 
 категорії (усіх <li>, вкладених у нього). */

 const liItem = document.querySelectorAll(".item");

 console.log(`Number of categories: ${liItem.length}`);
 
 liItem.forEach((el) => {
   const header = el.querySelector("h2");
   console.log(`Category: ${header.textContent}`);
   const li = el.querySelectorAll("ul li");
   console.log(`Elements: ${li.length}`);
 });