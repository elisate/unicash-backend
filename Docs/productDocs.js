/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - productName
 *         - productPrice
 *         - productCategory
 *         - images
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the product
 *         productName:
 *           type: string
 *           description: Name of the product
 *         productPrice:
 *           type: string
 *           description: Price of the product
 *         productCategory:
 *           type: string
 *           description: Category of the product
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Image URLs of the product
 *         description:
 *           type: string
 *           description: Description of the product
 *         stockQuantity:
 *           type: number
 *           description: Available stock quantity
 *         discount:
 *           type: number
 *           description: Discount applied to the product
 *         shopId:
 *           type: string
 *           description: The ID of the shop the product belongs to
 *       example:
 *         productName: "Laptop"
 *         productPrice: "1000"
 *         productCategory: "Electronics"
 *         images: ["image1.jpg", "image2.jpg"]
 *         description: "High-performance laptop"
 *         stockQuantity: 50
 *         discount: 10
 *         shopId: "60c72b2f9fd3c700170b3f5a"
 *
 * /product/createProduct:
 *   post:
 *     summary: Add a new product to a shop
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               shopName:
 *                 type: string
 *               productName:
 *                 type: string
 *               productPrice:
 *                 type: string
 *               productCategory:
 *                 type: string
 *               description:
 *                 type: string
 *               stockQuantity:
 *                 type: number
 *               discount:
 *                 type: number
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Product added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Shop not found
 *       500:
 *         description: Server error
 */

