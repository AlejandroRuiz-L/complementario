const employees = async () => {
  let busqueda = await fetch("./employees.json");
  let data = await busqueda.json();
  return data
};
const customers = async () => {
  let busqueda = await fetch("./customers.json");
  let data = await busqueda.json();
  return data
}
const companies = async () => {
  let busqueda = await fetch("./companies.json");
  let data = await busqueda.json();
  return data
}

const printGroupedData = async () => {
  try {
    const companiesData = await companies();
    const customersData = await customers();
    const employeesData = await employees();

    // Agrupar empleados por nombre de empresa
    const employeesByCompany = {};
    employeesData.forEach(employee => {
      const companyName = employee.company.name;
      if (!employeesByCompany[companyName]) {
        employeesByCompany[companyName] = [];
      }
      employeesByCompany[companyName].push(employee);
    });

    // Agrupar clientes por nombre de empresa
    const customersByCompany = {};
    customersData.forEach(customer => {
      const companyName = customer.company.name;
      if (!customersByCompany[companyName]) {
        customersByCompany[companyName] = [];
      }
      customersByCompany[companyName].push(customer);
    });

    // Iterar por cada empresa y imprimir clientes y empleados
    companiesData.forEach(company => {
      const companyName = company.name;

      console.log(`Company: ${companyName}`);

      // Imprimir clientes de esta empresa
      if (customersByCompany[companyName]) {
        console.log("Customers:");
        customersByCompany[companyName].forEach(customer => {
          console.log(`- ${customer.contactPerson}`);
        });
      }

      // Imprimir empleados de esta empresa
      if (employeesByCompany[companyName]) {
        console.log("Employees:");
        employeesByCompany[companyName].forEach(employee => {
          console.log(`- ${employee.fullName}`);
        });
      }

      console.log(""); // Separador entre empresas
    });

  } catch (error) {
    console.error('Error loading data:', error);
  }
};

// Llamar a la función para imprimir datos agrupados
printGroupedData();