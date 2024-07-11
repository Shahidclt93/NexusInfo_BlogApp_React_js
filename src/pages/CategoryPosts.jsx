import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/DataContextProvider";
import ScrollToTop from "../components/ScrollToTop";


const CategoryPosts = () => {

  const {category} = useParams()
  const {getPostByCategory} = useDataContext()
 const [selectedCategory, setSelectedCategory] = useState(category)
 const [selectedCategoryData, setSelectedCategoryData] = useState(null)


  useEffect(()=>{
    setSelectedCategoryData(getPostByCategory(selectedCategory))
  },[selectedCategory,category])

  const POST_CATEGORIES = [
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
    "All"
  ];

  return (
    <>
    <ScrollToTop/>
    <section>
<div className="category_select">

    <select  name="category" value={selectedCategory} onChange={(e)=> setSelectedCategory(e.target.value)}>
      {POST_CATEGORIES.map(item=>(
        <option key={item}>{item}</option>

      ))}
    </select>
</div>
      {selectedCategoryData?.length > 0 ? (
        <div className="container posts__container_category">
          {selectedCategoryData?.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={desc}
              authorID={authorID}
            />
          ))}
         
        </div>
      ) : (
        <h2 className="center">No posts found</h2>
      )}
    </section>
    </>
  );
};

export default CategoryPosts;
