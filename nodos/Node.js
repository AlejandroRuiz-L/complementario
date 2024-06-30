const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON de empleados
const employeesFilePath = path.resolve(__dirname, 'employees.json');
const customersFilePath = path.resolve(__dirname, 'customers.json');
const companiesFilePath = path.resolve(__dirname, 'companies.json');

// Función para leer y modificar el archivo JSON
const addIdsToEmployees = () => {
  try {
    // Leer el contenido actual del archivo
    let employeesData = JSON.parse(fs.readFileSync(employeesFilePath, 'utf8'));
    let customersData = JSON.parse(fs.readFileSync(customersFilePath, 'utf-8'));
    let companiesData = JSON.parse(fs.readFileSync(companiesFilePath, 'utf-8'));

    // Agregar la clave "id" a cada empleado
    employeesData.forEach((employee, index) => {
      employee.id = index + 1; // Asignar ids empezando desde 1
      // delete employee.id;
    });
    // Agregar la clave "id" a cada cliente
    customersData.forEach((customer, index) => {
      customer.id = index + 1; // Asignar ids empezando desde 1
      // delete customer.id;
    });
    // Agregar la clave "id" a cada empresa
    companiesData.forEach((company, index) => {
      company.id = index + 1; // Asignar ids empezando desde 1
      // delete company.id;
    });

    // Guardar los datos modificados de vuelta al archivo
    fs.writeFileSync(employeesFilePath, JSON.stringify(employeesData, null, 2));
    fs.writeFileSync(customersFilePath, JSON.stringify(customersData, null, 2));
    fs.writeFileSync(companiesFilePath, JSON.stringify(companiesData, null, 2));
    console.log('IDs added to employees, companies and customers successfully.');

  } catch (error) {
    console.error('Error processing data:', error);
  }
};

// Llamar a la función para agregar ids a los empleados
addIdsToEmployees();
