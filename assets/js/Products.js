// Angular js
app.controller("products", function ($scope, $window) {
  $scope.Products = [
    {
      name :"Giày Thể Thao Nam PVK - 0291",
      img:"1.jpg",
      price: 390000,
      oldPrice:450000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
    },
    {
      name :"Giày Thể Thao Nam PVK - 2810",
      img:"2.jpg",
      price: 350000,
      oldPrice:500000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
    },
    {
      name :"Giày Thể Thao Nam PVK - 9512",
      img:"3.jpg",
      price: 450000,
      oldPrice:650000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
    },
    {
      name :"Giày Thể ThaoNam PVK - 9422",
      img:"4.jpg",
      price: 280000,
      oldPrice:380000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
    },
    {
      name :"Giày Thể ThaoNam PVK - 7861",
      img:"5.jpg",
      price: 200000,
      oldPrice:280000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
    },
    {
      name :"Giày Thể Thao Nữ PVK - 3332",
      img:"6.jpg",
      price: 420000,
      oldPrice:550000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
    },
    {
      name :"Giày Thể Thao Nữ PVK - 0202",
      img:"7.jpg",
      price: 650000,
      oldPrice:780000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
    },
    {
      name :"Giày Thể Thao Nữ PVK - 6636",
      img:"8.jpg",
      price: 390000,
      oldPrice:450000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
    },

    {
      name :"Giày Thể Thao Nam PVK - 0032",
      img:"4.jpg",
      price: 490000,
      oldPrice:550000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
    },
    {
      name :"Giày Thể Thao Nữ PVK - 7845",
      img:"10.jpg",
      price: 190000,
      oldPrice:280000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
    },{
      name :"Giày Thể Thao Nữ PVK - 2655",
      img:"11.jpg",
      price: 590000,
      oldPrice:750000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
      },
      {
        name :"Giày Thể Thao Nữ PVK - 0251",
        img:"12.jpg",
        price: 390000,
        oldPrice:450000,
        info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
      },
      {
      name :"Giày Thể Thao Nữ PVK - 6159",
      img:"13.png",
      price: 490000,
      oldPrice:650000,
      info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
      },
      {
        name :"Giày Thể Thao Nữ PVK - 0207",
        img:"14.jpg",
        price: 390000,
      oldPrice:450000,
        info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
      },
      {
        name :"Giày Thể Thao Nữ PVK - 2355",
        img:"15.jpg",
        price: 190000,
        oldPrice:310000,
        info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
      },
      {
        name :"Giày Thể Thao NỮ PVK - 0543",
        img:"16.jpg",
        price: 790000,
        oldPrice:950000,
        info:"Giày được thiết kế kiểu dáng buộc dây sneaker cực ngầu, phong cách hiện đại, phối màu năng động in họa tiết chữ cao cấp, mang lại một phong cách thời trang thật thời thượng mỗi khi xuống phố. Sản phẩm có thiết kế tinh tế cùng đường may tỉ mỉ"
      }





  ];

  $scope.showdetails = function (p) {
       
    $scope.ph = p;
 };
});
