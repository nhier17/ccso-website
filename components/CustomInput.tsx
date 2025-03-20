/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from '@/components/ui/select';
import { Control } from 'react-hook-form';

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    SELECT = 'select'
}

interface CustomInputProps {
    control: Control<any>;
    name: string;
    fieldType: FormFieldType;
    label?: string;
    placeholder?: string;
    options?: { label: string; value: string }[]; // For Select
    disabled?: boolean; // Added disabled prop
}

const RenderField = ({ field, props }: { field: any; props: CustomInputProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <FormControl>
                    <Input {...field} placeholder={props.placeholder} className="field-input" disabled={props.disabled} />
                </FormControl>
            );
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea {...field} placeholder={props.placeholder} className="field-input" disabled={props.disabled} />
                </FormControl>
            );
        case FormFieldType.SELECT:
            return (
                <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={props.disabled}>
                        <SelectTrigger className="shad-select-trigger">
                            <SelectValue placeholder={props.placeholder} />
                        </SelectTrigger>
                        <SelectContent className="shad-select-content">
                            {props.options?.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormControl>
            );
    }
}

const CustomInput = (props: CustomInputProps) => {
    const { control, name, label } = props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel className="field-label">{label}</FormLabel>}
                    <RenderField field={field} props={props} />
                    <FormMessage className="text-red-500" />
                </FormItem>
            )}
        />
    );
};

export default CustomInput;
