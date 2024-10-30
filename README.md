# AngularSimpleFormValidators

This project demonstrates how to create a form with custom validators.
The image shows that clicking on an input and then clicking outside of it will display an error message. <br>
![image](https://github.com/user-attachments/assets/40f5e87e-db99-4b7b-be97-f2ca10b8246b)

Additionally, if you click on submit without the form information being correct, it will display all error messages for the inputs. <br>
![image](https://github.com/user-attachments/assets/1af8eedf-f12a-4417-a4bf-4fae25cc3837)

This is achieved in the **app.module.ts** file <br>
![image](https://github.com/user-attachments/assets/2956a552-078e-4804-930a-6f3293e547fe)


As we can see, the **name** field has a validator that indicates this field is **required**.
The **age** field is also required, but it has an additional validator, which is defined in the **validators.ts** file <br>
![image](https://github.com/user-attachments/assets/2a512a77-2add-4fc0-b025-cba55ef2b57c) <br> <br>
![image](https://github.com/user-attachments/assets/b60a5895-5523-4889-b5b9-c69e48df527c)

As we can see, the validator indicates that the error is true.
This error is defined in the HTML file with an **ngIf:**
![image](https://github.com/user-attachments/assets/eab86e57-5989-4f79-8305-9783b93549c1)
