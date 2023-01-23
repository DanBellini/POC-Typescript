--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-1.pgdg22.04+1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sticky_notes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sticky_notes (
    id integer NOT NULL,
    description text NOT NULL,
    done boolean DEFAULT false NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: sticky_notes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sticky_notes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sticky_notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sticky_notes_id_seq OWNED BY public.sticky_notes.id;


--
-- Name: sticky_notes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sticky_notes ALTER COLUMN id SET DEFAULT nextval('public.sticky_notes_id_seq'::regclass);


--
-- Data for Name: sticky_notes; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Name: sticky_notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sticky_notes_id_seq', 2, true);


--
-- Name: sticky_notes sticky_notes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sticky_notes
    ADD CONSTRAINT sticky_notes_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

