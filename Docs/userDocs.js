/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - userEmail
 *         - userNames
 *         - userRole
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated user ID
 *         userEmail:
 *           type: string
 *           format: email
 *           description: Unique user email
 *         userNames:
 *           type: string
 *           description: Full name of the user
 *         userRole:
 *           type: string
 *           enum: ["Admin", "ShopOwner", "Student"]
 *           description: Role assigned to the user
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: User profile images
 *       example:
 *         userEmail: "user@example.com"
 *         userNames: "John Doe"
 *         userRole: "Student"
 *         images: ["profile.jpg"]
 *
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userEmail:
 *                 type: string
 *                 format: email
 *               userNames:
 *                 type: string
 *               userRole:
 *                 type: string
 *                 enum: ["Admin", "ShopOwner", "Student"]
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 *
 * /user/login:
 *   post:
 *     summary: Authenticate user and return a JWT token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userEmail:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 *
 * /user/profile:
 *   get:
 *     summary: Get logged-in user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
