"use client"
import { DeleteIcon } from '@/utils/icons/DeleteIcon';
import { EditIcon } from '@/utils/icons/EditIcon';
import { EyeIcon } from '@/utils/icons/EyeIcon';
import { Button, Chip, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from '@nextui-org/react';
import React from 'react'
const statusColorMap: any = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};
import { columns, users } from '@/utils/temporal-data/data'
import { SearchIcon } from '@/utils/icons/SearchIcon';
export default function ProductsDashboard() {

    const renderCell = React.useCallback((user: any, columnKey: any) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: user.avatar }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Edit user">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <div className='flex flex-col gap-y-2 p-2'>
            <div className='flex justify-between px-10'>
                <Input
                    label="Buscador"
                    isClearable
                    radius="lg"
                    className='mr-2'
                    placeholder="Escribe para buscar ..."
                    startContent={
                        <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                    }
                />
                <Button color="success" className='text-white'>
                    Crear producto
                </Button>
            </div>

            <Table aria-label="Product Table - DragonFly">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={users}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
