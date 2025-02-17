import { FormControl } from "@angular/forms";

export type SearchOptionForm = {
    authorName: FormControl<string>;
    isParticipant: FormControl<boolean>;
    strictSearch: FormControl<boolean>;
    inTitles: FormControl<boolean>;
    tags: FormControl<boolean>;
    requests: FormControl<boolean>;
    contacts: FormControl<boolean>;
}

export type SearchOptionFormValues = Partial<{
    authorName: string;
    isParticipant: boolean;
    strictSearch: boolean;
    inTitles: boolean;
    tags: boolean;
    requests: boolean;
    contacts: boolean;
}>;