/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - studentName
 *         - studentEmail
 *         - studentAccount
 *         - studentReg_num
 *         - national_id
 *         - campusName
 *         - verificationToken
 *         - tokenExpiry
 *         - isVerified
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the student
 *         studentName:
 *           type: string
 *           description: Full name of the student
 *         studentEmail:
 *           type: string
 *           description: Email address of the student
 *         studentAccount:
 *           type: string
 *           description: Unique account identifier for the student
 *         studentReg_num:
 *           type: string
 *           description: Registration number of the student
 *         national_id:
 *           type: string
 *           description: National ID of the student
 *         studentLoan_status:
 *           type: string
 *           description: Loan status of the student (e.g., Active, Paid)
 *         campusName:
 *           type: string
 *           description: The name of the campus the student is registered at
 *         images:
 *           type: string
 *           description: URL to the student's profile image
 *         verificationToken:
 *           type: string
 *           description: Token used for email verification
 *         tokenExpiry:
 *           type: string
 *           format: date-time
 *           description: Expiry time for the verification token
 *         isVerified:
 *           type: boolean
 *           description: Indicates whether the student has verified their email
 *       example:
 *         studentName: "John Doe"
 *         studentEmail: "johndoe@example.com"
 *         studentAccount: "johndoe123"
 *         studentReg_num: "123456"
 *         national_id: "NID12345678"
 *         studentLoan_status: "Active"
 *         campusName: "Central Campus"
 *         images: "http://example.com/johndoe.jpg"
 *         verificationToken: "abc123"
 *         tokenExpiry: "2024-06-01T12:00:00Z"
 *         isVerified: false
 *
 * /students:
 *   get:
 *     summary: Retrieve all student records
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: A list of all students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Internal Server Error
 *
 *   post:
 *     summary: Register a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Student registered successfully. Verification email sent.
 *       400:
 *         description: Student already exists
 *       500:
 *         description: Internal Server Error
 *
 * /students/verify:
 *   post:
 *     summary: Verify student email
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentEmail
 *               - verificationToken
 *             properties:
 *               studentEmail:
 *                 type: string
 *                 description: Email address of the student
 *               verificationToken:
 *                 type: string
 *                 description: Verification token received via email
 *     responses:
 *       200:
 *         description: Email verified successfully, student can log in.
 *       400:
 *         description: Invalid token or student not found
 *       500:
 *         description: Internal Server Error
 *
 * /students/{id}:
 *   get:
 *     summary: Get a student record by ID
 *     tags: [Students]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved student details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 *       500:
 *         description: Internal Server Error
 *
 *   put:
 *     summary: Update an existing student record by ID
 *     tags: [Students]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: Student record successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Bad request, invalid data or missing fields
 *       404:
 *         description: Student not found
 *
 *   delete:
 *     summary: Delete a student record by ID
 *     tags: [Students]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student successfully deleted
 *       404:
 *         description: Student not found
 *       500:
 *         description: Internal Server Error
 * get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all products
 *       500:
 *         description: Server error
 *
 * /product/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product found
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 *
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 *
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */

 
