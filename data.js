var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("Isaac","Raya",12));
allStudents.push(new Student("Georgia","Tomasik",10));
allStudents.push(new Student("Ross","Schultz",10));
allStudents.push(new Student("Kalani","Kossa-Rienzi",9));
allStudents.push(new Student("Duncan","Jenny",12));

allTeachers.push(new Teacher("Russel-Mills","Campisi","Enviro"));
allTeachers.push(new Teacher("Nakia","Baird","Math"));
allTeachers.push(new Teacher("Karl","Kaku","English"));
allTeachers.push(new Teacher("Matt","Albinson","CS"));
allTeachers.push(new Teacher("Ross","Parker","Economics"));

allSections.push(new Section("Enviro",30));
allSections.push(new Section("Math",25));
allSections.push(new Section("English",30));
allSections.push(new Section("CS",32));
allSections.push(new Section("Economics",30));

//allSections[0].addStudentToSection(allStudents[2]);

//var allItems = [allStudents, allTeachers, allSections];
