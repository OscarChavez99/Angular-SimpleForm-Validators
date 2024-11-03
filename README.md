# AngularSimpleFormValidators

## How it Works
This project demonstrates how to create a form with custom validators.
The image shows that clicking on an input and then clicking outside of it will display an error message. <br>
![image](https://github.com/user-attachments/assets/40f5e87e-db99-4b7b-be97-f2ca10b8246b)

Additionally, if you click on submit without the form information being correct, it will display all error messages for the inputs. <br>
![image](https://github.com/user-attachments/assets/1af8eedf-f12a-4417-a4bf-4fae25cc3837)

This is achieved in the **app.module.ts** file <br>
![image](https://github.com/user-attachments/assets/2956a552-078e-4804-930a-6f3293e547fe)


As we can see, the **name** field has a validator that indicates this field is **required**.
The **age** field is also required, but it has an additional validator, which is defined in the **validators.ts** file <br>
![image](https://github.com/user-attachments/assets/83308152-1233-41be-a896-008450189303) <br> <br>
![image](https://github.com/user-attachments/assets/2543d872-93ec-40cb-8230-a3b8164cca36)

As we can see, the validator indicates that the error is true.
This error is defined in the HTML file with an **ngIf:**
![image](https://github.com/user-attachments/assets/647d6947-e7e4-478b-ac61-bf1efdaf2061)

## How to run the project
1. Clone or Download this repository <br> <br>
![image](https://github.com/user-attachments/assets/77f50bc2-3016-44f6-8a37-a858cc689cb5)
2. Open a terminal in the folder where you have the project and run the following command: **npm install** <br> <br>
![image](https://github.com/user-attachments/assets/9fa11c93-6526-4265-8fa6-3817f8d72fd9)
3. Run the following command: **ng serve -o** <br> <br>
![image](https://github.com/user-attachments/assets/dd7f4355-9062-4dc1-ab3d-9db23a020717)
