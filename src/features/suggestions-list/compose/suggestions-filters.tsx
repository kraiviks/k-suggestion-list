import { UiSelectField } from "@/shared/ui/form/ui-select-field";
import { UiTextField } from "@/shared/ui/form/ui-text-field";
import { FiltersLayout } from "../ui/filters-layout";
import { useFilters } from "../model/filters.model";
import { sortOptions, statusOptions, tagsOptions } from "../constants";

export function SuggestionsFilters() {
  const { data, updateOrder, updateQuery, updateStatus, updateTag } =
    useFilters();

  return (
    <FiltersLayout>
      <UiTextField
        label="Search by name/description"
        onChange={updateQuery}
        value={data.query}
      />
      <UiSelectField
        label="Filter by tags"
        idKey="id"
        labelKey="label"
        options={tagsOptions}
        value={data.tag}
        onChange={updateTag}
      />
      <UiSelectField
        label="Filter by status"
        idKey="id"
        labelKey="label"
        options={statusOptions}
        value={data.status}
        onChange={updateStatus}
      />
      <UiSelectField
        label="Sort by"
        idKey="id"
        labelKey="label"
        options={sortOptions}
        value={data.order}
        onChange={updateOrder}
      />
    </FiltersLayout>
  );
}
