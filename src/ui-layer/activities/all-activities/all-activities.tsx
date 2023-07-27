import { useEffect, useState } from "react";
import VFlex from "../../shared/VFlex/VFlex";
import { deleteActivities, getAllActivities } from "./service";
import {
  Button,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableCellLayout,
  TableColumnDefinition,
  TableRowId,
  createTableColumn,
} from "@fluentui/react-components";
import { Delete24Regular } from "@fluentui/react-icons";

type Item = {
  activity: string;
  time: string;
  createdAt: string;
};

type OnSelectionChangeData = {
  selectedItems: null | Set<TableRowId>;
};

const AllActivities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [selectedActivities, setSelctedActivities] =
    useState<OnSelectionChangeData>();

  useEffect(() => {
    getAllActivities().then((fetchedActivities) =>
      setAllActivities(fetchedActivities)
    );
    return () => {
      setAllActivities([]);
    };
  }, []);

  const headers = ["name", "time", "createdAt"];

  const columns: TableColumnDefinition<Item>[] = headers.map((header) =>
    createTableColumn<Item>({
      columnId: header,
      compare: (a, b) => {
        return ((a as never)[header] as string).localeCompare(
          (b as never)[header]
        );
      },
      renderHeaderCell: () => {
        return header[0].toUpperCase() + header.substring(1);
      },
      renderCell: (item) => {
        return <TableCellLayout>{(item as never)[header]}</TableCellLayout>;
      },
    })
  );

  function handleDeleteActivities() {
    const list = Array.from(selectedActivities?.selectedItems || []).map(
      (index) => allActivities[index as never]
    );
    if (list.length > 0) {
      deleteActivities(list);
      getAllActivities().then((fetchedActivities) =>
        setAllActivities(fetchedActivities)
      );
      setSelctedActivities(undefined);
    }
  }

  return (
    <VFlex class="gap-2">
      {allActivities.length === 0 ? (
        <div>No activities</div>
      ) : (
        <>
          <DataGrid
            items={allActivities}
            columns={columns}
            sortable
            selectionMode="multiselect"
            getRowId={(item) => item.activity}
            onSelectionChange={(_e, data) => setSelctedActivities(data)}
            focusMode="composite"
            className="w-full"
          >
            <DataGridHeader>
              <DataGridRow selectionCell={{ "aria-label": "Select all rows" }}>
                {({ renderHeaderCell }) => (
                  <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
                )}
              </DataGridRow>
            </DataGridHeader>
            <DataGridBody<Item>>
              {({ item, rowId }) => (
                <DataGridRow<Item>
                  key={rowId}
                  selectionCell={{ "aria-label": "Select row" }}
                >
                  {({ renderCell }) => (
                    <DataGridCell>{renderCell(item)}</DataGridCell>
                  )}
                </DataGridRow>
              )}
            </DataGridBody>
          </DataGrid>
          <Button
            appearance="primary"
            icon={<Delete24Regular />}
            onClick={handleDeleteActivities}
          >
            Delete
          </Button>
        </>
      )}
    </VFlex>
  );
};

export default AllActivities;
