import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { Container, FormContainer, Title, Subtitle, FormGroup, Label, Input, RadioGroup, RadioLabel, RadioInput, ErrorMessage, Button } from './StyledComponents';
import { theme, GlobalStyle } from '../theme';

type FormValues = {
  nom: string;
  prenom: string;
  age: number;
  dateN: string;
  email: string;
  genre: string;
  adresse: string;
  telephone: string;
  description: string;
  diplome: FileList;
  photo: FileList;
};

const Form: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <Title>Formulaire</Title>
            <Subtitle>avec ReactJS </Subtitle>

            <FormGroup>
              <Label htmlFor="nom">Nom</Label>
              <Input
                {...register("nom", {
                  required: "Nom est requis",
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                    message: "Nom invalide. Utilisez uniquement des lettres et des espaces."
                  }
                })}
                type="text"
                id="nom"
              />
              {errors.nom && <ErrorMessage>{errors.nom.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="prenom">Prenom</Label>
              <Input
                {...register("prenom", {
                  required: "Prenom est requis",
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                    message: "Prenom invalide. Utilisez uniquement des lettres et des espaces."
                  }
                })}
                type="text"
                id="prenom"
              />
              {errors.prenom && <ErrorMessage>{errors.prenom.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="age">Age</Label>
              <Input
                {...register("age", {
                  required: "Age est requis",
                  valueAsNumber: true,
                  validate: value => value > 0 || "L'âge doit être un nombre positif."
                })}
                type="number"
                id="age"
              />
              {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="dateN">Date de Naissance</Label>
              <Input
                {...register("dateN", { required: "Date de Naissance est requis" })}
                type="date"
                id="dateN"
              />
              {errors.dateN && <ErrorMessage>{errors.dateN.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email", {
                  required: "Email est requis",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Adresse email invalide"
                  }
                })}
                type="email"
                id="email"
                placeholder="exemple@sous-domaine.fr"
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>Genre</Label>
              <RadioGroup>
                <RadioLabel>
                  <RadioInput
                    {...register("genre", { required: "Genre est requis" })}
                    type="radio"
                    value="Homme"
                  />
                  Homme
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    {...register("genre", { required: "Genre est requis" })}
                    type="radio"
                    value="Femme"
                  />
                  Femme
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    {...register("genre", { required: "Genre est requis" })}
                    type="radio"
                    value="Autre"
                  />
                  Autre
                </RadioLabel>
              </RadioGroup>
              {errors.genre && <ErrorMessage>{errors.genre.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="adresse">Adresse</Label>
              <Input
                {...register("adresse", { required: "Adresse est requis" })}
                type="text"
                id="adresse"
              />
              {errors.adresse && <ErrorMessage>{errors.adresse.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="telephone">Numéro de Téléphone</Label>
              <Input
                {...register("telephone", {
                  required: "Numéro de Téléphone est requis",
                  pattern: {
                    value: /^\d+$/,
                    message: "Numéro de Téléphone invalide. Utilisez uniquement des chiffres."
                  }
                })}
                type="text"
                id="telephone"
              />
              {errors.telephone && <ErrorMessage>{errors.telephone.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">Description de votre profil</Label>
              <Input
                {...register("description", { required: "Description est requis" })}
                type="text"
                id="description"
              />
              {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="diplome">Dernier diplôme obtenu</Label>
              <Input
                {...register("diplome")}
                type="file"
                id="diplome"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="photo">Ajouter une photo (facultatif)</Label>
              <Input
                {...register("photo")}
                type="file"
                id="photo"
              />
            </FormGroup>

            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </form>
        </FormContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Form;
