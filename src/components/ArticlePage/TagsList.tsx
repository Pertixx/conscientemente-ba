import { Tag } from "@/types";
import TagButton from "../Buttons/TagButton";


export default function TagsList({ tags, entity }: { tags: Tag[], entity: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-4">Tags</h2>
      <div className="flex flex-wrap gap-2">
        {
          tags.map((tag, index) => (
            <TagButton key={index} tag={tag} entity={entity} />
          ))
        }
      </div>
    </div>
  );
}