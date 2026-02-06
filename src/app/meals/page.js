import Link from "next/link";
import Image from "next/image";

export default function MealsGrid({ meals }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
      {meals.map((meal) => (
        <Link key={meal.slug} href={`/meals/${meal.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
            <Image src={meal.image} alt={meal.title} width={300} height={200} style={{ borderRadius: "8px" }} />
            <h3>{meal.title}</h3>
            <p>{meal.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
