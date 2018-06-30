async function main() {
  const something = (Math.random() > 0.5) ? await import('./a') : await import ('./b');
  if ('a' in something) {
     console.log(something.a.field);
    //  console.log(something.b); // Will err
  } else {
    console.log(something.b.field2);
  }
} 