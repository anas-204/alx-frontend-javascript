interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;  
  location: string;           
  yearsOfExperience?: number; 
  [key: string]: any;         
}

interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  return `${firstInitial}. ${lastName}`;
};
