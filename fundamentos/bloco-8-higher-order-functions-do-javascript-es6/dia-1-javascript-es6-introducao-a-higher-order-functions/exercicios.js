const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (callback) => {
    const employees = {
      id1: callback('BenHur Albertassi'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator));

  // -------------------------------------------------------------------

  const numeroChck = (meuNumero, number) => meuNumero === number ;
    const resultadoSorteio = (meuNumero, callback) =>{
        const number = Math.floor((Math.random()*5)+1)
        return callback (meuNumero, number) ? 'Parabens você ganhou' : 'Tente novamente'
  }
  console.log(resultadoSorteio(2, numeroChck));