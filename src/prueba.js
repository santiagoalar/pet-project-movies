


try {
    const realease_date = new Date('2020-1019');
    console.log(realease_date);
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }