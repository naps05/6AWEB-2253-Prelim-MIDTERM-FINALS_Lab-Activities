export class TemplateDemo{
  title = "Template Driven Demo"; // [cite: 39]
  username = ''; // [cite: 40]
  email = '';    // [cite: 41]
  password = ''; // [cite: 42]
  role = '';     // [cite: 42]

  // Additional 3 Fields
  phone = '';
  bio = '';
  isAgreed = false;

  submitted = false; // [cite: 43]

  onSubmit() {
    this.submitted = true; // [cite: 44, 45]
    console.log("Form Submitted!", {
      user: this.username,
      email: this.email,
      phone: this.phone,
      bio: this.bio,
      role: this.role
    });
  }
}
