import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create product categories
  const category1 = await prisma.productCategory.create({
    data: { title: "Electronics" },
  });

  const category2 = await prisma.productCategory.create({
    data: { title: "Clothing" },
  });

  // Create products
  const product1 = await prisma.product.create({
    data: {
      title: "Laptop",
      description: "High-performance laptop",
      categories: { connect: { slug: category1.slug } },
    },
  });

  const product2 = await prisma.product.create({
    data: {
      title: "T-shirt",
      description: "Comfortable cotton t-shirt",
      categories: { connect: { slug: category2.slug } },
    },
  });
  const product3 = await prisma.product.create({
    data: {
      title: "Smartwatch",
      description:
        "High-tech wearable device with various features such as fitness tracking, notifications, and Bluetooth connectivity.",
      categories: {
        connect: [{ slug: category1.slug }, { slug: category2.slug }],
      },
    },
  });
  // Create warehouses
  const warehouse1 = await prisma.warehouse.create({
    data: { title: "Warehouse A", location: "City A" },
  });

  const warehouse2 = await prisma.warehouse.create({
    data: { title: "Warehouse B", location: "City B" },
  });

  // Store products in warehouses
  await prisma.warehouseProduct.createMany({
    data: [
      {
        warehouseId: warehouse1.uuid,
        productId: product1.sku,
        quantity: 10,
      },
      {
        warehouseId: warehouse2.uuid,
        productId: product3.sku,
        quantity: 15,
      },
      {
        warehouseId: warehouse2.uuid,
        productId: product1.sku,
        quantity: 5,
      },
      {
        warehouseId: warehouse2.uuid,
        productId: product2.sku,
        quantity: 20,
      },
    ],
  });

  // Search queries

  //Function to the total quantity across all warehouses

  const countAllProducts = async () => {
    const warehouseProducts = await prisma.warehouseProduct.findMany({});

    const totalQuantity = warehouseProducts.reduce(
      (total, wp) => total + wp.quantity,
      0
    );

    return totalQuantity;
  };
  countAllProducts().then((count) =>
    console.log(`The quantity of all products in all warehouses: ${count}`)
  );

  //Function to count all in a specific warehouse

  const countAllProductsOnStock = async (warehouse_id: string) => {
    const warehouseProducts = await prisma.warehouseProduct.findMany({
      where: {
        warehouseId: parseInt(warehouse_id),
      },
    });
    const totalQuantity = warehouseProducts.reduce(
      (total, wp) => total + wp.quantity,
      0
    );

    return totalQuantity;
  };

  countAllProductsOnStock("1").then((count) =>
    console.log(
      `The quantity of all products in a specific warehouse: ${count}`
    )
  );

  //Function to count a specific product in all warehouses

  const countProduct = async (product_id: string) => {
    const warehouseProducts = await prisma.warehouseProduct.findMany({
      where: {
        productId: parseInt(product_id),
      },
    });

    const totalQuantity = warehouseProducts.reduce(
      (total, wp) => total + wp.quantity,
      0
    );

    return totalQuantity;
  };

  countProduct("1").then((count) =>
    console.log(
      `The quantity for a specific product in all warehouses: ${count}`
    )
  );

  //Function to count a specific product in a specific warehouse
  const countProductOnStock = async (
    warehouse_id: string,
    product_id: string
  ) => {
    const warehouseProduct = await prisma.warehouseProduct.findFirst({
      where: {
        warehouseId: parseInt(warehouse_id),
        productId: parseInt(product_id),
      },
    });

    if (warehouseProduct) {
      return warehouseProduct.quantity;
    } else {
      return 0;
    }
  };

  countProductOnStock("2", "1").then((count) =>
    console.log(
      `The quantity for a specific product in a specific warehouse: ${count}.`
    )
  );

  //Function to count products by category
  const countProductByCategory = async (category_id: string) => {
    const warehouseProducts = await prisma.warehouseProduct.findMany({
      where: {
        product: {
          categories: {
            some: {
              slug: parseInt(category_id),
            },
          },
        },
      },
    });

    const totalQuantity = warehouseProducts.reduce(
      (total, wp) => total + wp.quantity,
      0
    );

    return totalQuantity;
  };

  countProductByCategory("2").then((count) =>
    console.log(`The quantity of products for the specified category: ${count}`)
  );

  //Function to count products by category in a specific warehouse

  const countProductOnStockByCategory = async (
    warehouse_id: string,
    category_id: string
  ) => {
    const warehouseProducts = await prisma.warehouseProduct.findMany({
      where: {
        warehouseId: parseInt(warehouse_id),
        product: {
          categories: {
            some: {
              slug: parseInt(category_id),
            },
          },
        },
        quantity: { gt: 0 },
      },
    });

    const totalQuantity = warehouseProducts.reduce(
      (total, wp) => total + wp.quantity,
      0
    );

    return totalQuantity;
  };

  countProductOnStockByCategory("2", "2").then((count) =>
    console.log(
      `The quantity of products by category in a specific warehouse: ${count}`
    )
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
  });
